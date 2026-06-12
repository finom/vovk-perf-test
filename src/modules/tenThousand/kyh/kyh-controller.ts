import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyh")
export default class KyhController {
  @operation({
    summary: "Get Kyh",
  })
  @get()
  static getKyh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kyh",
  })
  @post("{id}")
  static createKyh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
