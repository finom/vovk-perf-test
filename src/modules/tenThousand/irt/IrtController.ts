import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irt")
export default class IrtController {
  @operation({
    summary: "Get Irt",
  })
  @get()
  static getIrt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Irt",
  })
  @post("{id}")
  static createIrt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
