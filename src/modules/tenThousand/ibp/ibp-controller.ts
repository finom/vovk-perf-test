import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibp")
export default class IbpController {
  @operation({
    summary: "Get Ibp",
  })
  @get()
  static getIbp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ibp",
  })
  @post("{id}")
  static createIbp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
