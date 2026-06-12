import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyx")
export default class JyxController {
  @operation({
    summary: "Get Jyx",
  })
  @get()
  static getJyx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jyx",
  })
  @post("{id}")
  static createJyx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
