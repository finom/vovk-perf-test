import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ii")
export default class IiController {
  @operation({
    summary: "Get Ii",
  })
  @get()
  static getIi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ii",
  })
  @post("{id}")
  static createIi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
