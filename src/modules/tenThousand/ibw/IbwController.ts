import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibw")
export default class IbwController {
  @operation({
    summary: "Get Ibw",
  })
  @get()
  static getIbw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ibw",
  })
  @post("{id}")
  static createIbw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
