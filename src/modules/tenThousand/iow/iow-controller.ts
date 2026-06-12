import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iow")
export default class IowController {
  @operation({
    summary: "Get Iow",
  })
  @get()
  static getIow = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iow",
  })
  @post("{id}")
  static createIow = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
