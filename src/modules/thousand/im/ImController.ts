import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("im")
export default class ImController {
  @operation({
    summary: "Get Im",
  })
  @get()
  static getIm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Im",
  })
  @post("{id}")
  static createIm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
