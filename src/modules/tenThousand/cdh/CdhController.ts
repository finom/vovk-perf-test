import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdh")
export default class CdhController {
  @operation({
    summary: "Get Cdh",
  })
  @get()
  static getCdh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cdh",
  })
  @post("{id}")
  static createCdh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
