import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igr")
export default class IgrController {
  @operation({
    summary: "Get Igr",
  })
  @get()
  static getIgr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Igr",
  })
  @post("{id}")
  static createIgr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
