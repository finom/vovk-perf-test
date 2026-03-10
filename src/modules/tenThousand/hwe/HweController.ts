import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwe")
export default class HweController {
  @operation({
    summary: "Get Hwe",
  })
  @get()
  static getHwe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hwe",
  })
  @post("{id}")
  static createHwe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
