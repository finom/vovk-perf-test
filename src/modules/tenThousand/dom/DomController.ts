import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dom")
export default class DomController {
  @operation({
    summary: "Get Dom",
  })
  @get()
  static getDom = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dom",
  })
  @post("{id}")
  static createDom = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
