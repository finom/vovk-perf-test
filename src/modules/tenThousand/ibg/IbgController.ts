import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibg")
export default class IbgController {
  @operation({
    summary: "Get Ibg",
  })
  @get()
  static getIbg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ibg",
  })
  @post("{id}")
  static createIbg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
