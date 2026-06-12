import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myp")
export default class MypController {
  @operation({
    summary: "Get Myp",
  })
  @get()
  static getMyp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Myp",
  })
  @post("{id}")
  static createMyp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
