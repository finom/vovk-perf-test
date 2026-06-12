import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flv")
export default class FlvController {
  @operation({
    summary: "Get Flv",
  })
  @get()
  static getFlv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Flv",
  })
  @post("{id}")
  static createFlv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
