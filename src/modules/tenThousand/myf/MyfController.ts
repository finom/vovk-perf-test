import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myf")
export default class MyfController {
  @operation({
    summary: "Get Myf",
  })
  @get()
  static getMyf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Myf",
  })
  @post("{id}")
  static createMyf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
