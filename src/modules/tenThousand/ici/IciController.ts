import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ici")
export default class IciController {
  @operation({
    summary: "Get Ici",
  })
  @get()
  static getIci = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ici",
  })
  @post("{id}")
  static createIci = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
