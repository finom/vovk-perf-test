import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctv")
export default class CtvController {
  @operation({
    summary: "Get Ctv",
  })
  @get()
  static getCtv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ctv",
  })
  @post("{id}")
  static createCtv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
