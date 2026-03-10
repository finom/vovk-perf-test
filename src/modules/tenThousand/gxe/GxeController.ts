import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxe")
export default class GxeController {
  @operation({
    summary: "Get Gxe",
  })
  @get()
  static getGxe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gxe",
  })
  @post("{id}")
  static createGxe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
