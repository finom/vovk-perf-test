import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iuw")
export default class IuwController {
  @operation({
    summary: "Get Iuw",
  })
  @get()
  static getIuw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iuw",
  })
  @post("{id}")
  static createIuw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
