import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilu")
export default class IluController {
  @operation({
    summary: "Get Ilu",
  })
  @get()
  static getIlu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ilu",
  })
  @post("{id}")
  static createIlu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
