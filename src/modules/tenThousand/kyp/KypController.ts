import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyp")
export default class KypController {
  @operation({
    summary: "Get Kyp",
  })
  @get()
  static getKyp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kyp",
  })
  @post("{id}")
  static createKyp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
