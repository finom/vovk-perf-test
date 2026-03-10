import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erj")
export default class ErjController {
  @operation({
    summary: "Get Erj",
  })
  @get()
  static getErj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Erj",
  })
  @post("{id}")
  static createErj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
