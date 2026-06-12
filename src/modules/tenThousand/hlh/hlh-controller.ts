import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlh")
export default class HlhController {
  @operation({
    summary: "Get Hlh",
  })
  @get()
  static getHlh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hlh",
  })
  @post("{id}")
  static createHlh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
