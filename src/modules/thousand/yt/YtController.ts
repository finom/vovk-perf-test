import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yt")
export default class YtController {
  @operation({
    summary: "Get Yt",
  })
  @get()
  static getYt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Yt",
  })
  @post("{id}")
  static createYt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
