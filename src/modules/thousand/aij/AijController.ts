import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aij")
export default class AijController {
  @operation({
    summary: "Get Aij",
  })
  @get()
  static getAij = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aij",
  })
  @post("{id}")
  static createAij = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
