import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ez")
export default class EzController {
  @operation({
    summary: "Get Ez",
  })
  @get()
  static getEz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ez",
  })
  @post("{id}")
  static createEz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
