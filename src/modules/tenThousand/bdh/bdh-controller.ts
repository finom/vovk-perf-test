import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdh")
export default class BdhController {
  @operation({
    summary: "Get Bdh",
  })
  @get()
  static getBdh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bdh",
  })
  @post("{id}")
  static createBdh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
