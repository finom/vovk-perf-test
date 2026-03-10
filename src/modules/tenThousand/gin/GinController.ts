import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gin")
export default class GinController {
  @operation({
    summary: "Get Gin",
  })
  @get()
  static getGin = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gin",
  })
  @post("{id}")
  static createGin = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
