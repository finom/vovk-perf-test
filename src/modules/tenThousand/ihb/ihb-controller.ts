import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihb")
export default class IhbController {
  @operation({
    summary: "Get Ihb",
  })
  @get()
  static getIhb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ihb",
  })
  @post("{id}")
  static createIhb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
