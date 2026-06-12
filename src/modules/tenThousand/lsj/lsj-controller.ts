import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsj")
export default class LsjController {
  @operation({
    summary: "Get Lsj",
  })
  @get()
  static getLsj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lsj",
  })
  @post("{id}")
  static createLsj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
