import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ieg")
export default class IegController {
  @operation({
    summary: "Get Ieg",
  })
  @get()
  static getIeg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ieg",
  })
  @post("{id}")
  static createIeg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
