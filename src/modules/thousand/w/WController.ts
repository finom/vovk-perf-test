import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("w")
export default class WController {
  @operation({
    summary: "Get W",
  })
  @get()
  static getW = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create W",
  })
  @post("{id}")
  static createW = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
