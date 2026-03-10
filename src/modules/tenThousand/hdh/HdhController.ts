import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdh")
export default class HdhController {
  @operation({
    summary: "Get Hdh",
  })
  @get()
  static getHdh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hdh",
  })
  @post("{id}")
  static createHdh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
