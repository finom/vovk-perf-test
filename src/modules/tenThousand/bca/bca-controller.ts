import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bca")
export default class BcaController {
  @operation({
    summary: "Get Bca",
  })
  @get()
  static getBca = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bca",
  })
  @post("{id}")
  static createBca = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
