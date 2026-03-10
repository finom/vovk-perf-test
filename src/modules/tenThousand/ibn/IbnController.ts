import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibn")
export default class IbnController {
  @operation({
    summary: "Get Ibn",
  })
  @get()
  static getIbn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ibn",
  })
  @post("{id}")
  static createIbn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
