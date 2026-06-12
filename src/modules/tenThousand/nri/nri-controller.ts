import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nri")
export default class NriController {
  @operation({
    summary: "Get Nri",
  })
  @get()
  static getNri = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nri",
  })
  @post("{id}")
  static createNri = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
