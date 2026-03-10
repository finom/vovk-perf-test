import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("niu")
export default class NiuController {
  @operation({
    summary: "Get Niu",
  })
  @get()
  static getNiu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Niu",
  })
  @post("{id}")
  static createNiu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
