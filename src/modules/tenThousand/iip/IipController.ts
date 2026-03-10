import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iip")
export default class IipController {
  @operation({
    summary: "Get Iip",
  })
  @get()
  static getIip = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iip",
  })
  @post("{id}")
  static createIip = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
