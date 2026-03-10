import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byj")
export default class ByjController {
  @operation({
    summary: "Get Byj",
  })
  @get()
  static getByj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Byj",
  })
  @post("{id}")
  static createByj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
