import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ob")
export default class ObController {
  @operation({
    summary: "Get Ob",
  })
  @get()
  static getOb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ob",
  })
  @post("{id}")
  static createOb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
