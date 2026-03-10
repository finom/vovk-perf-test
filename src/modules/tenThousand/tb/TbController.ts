import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tb")
export default class TbController {
  @operation({
    summary: "Get Tb",
  })
  @get()
  static getTb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Tb",
  })
  @post("{id}")
  static createTb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
