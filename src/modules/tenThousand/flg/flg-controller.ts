import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flg")
export default class FlgController {
  @operation({
    summary: "Get Flg",
  })
  @get()
  static getFlg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Flg",
  })
  @post("{id}")
  static createFlg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
