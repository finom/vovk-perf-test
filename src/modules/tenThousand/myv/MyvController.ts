import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myv")
export default class MyvController {
  @operation({
    summary: "Get Myv",
  })
  @get()
  static getMyv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Myv",
  })
  @post("{id}")
  static createMyv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
