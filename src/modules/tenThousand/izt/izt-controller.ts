import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izt")
export default class IztController {
  @operation({
    summary: "Get Izt",
  })
  @get()
  static getIzt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Izt",
  })
  @post("{id}")
  static createIzt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
