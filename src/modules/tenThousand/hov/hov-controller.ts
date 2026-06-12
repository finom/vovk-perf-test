import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hov")
export default class HovController {
  @operation({
    summary: "Get Hov",
  })
  @get()
  static getHov = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hov",
  })
  @post("{id}")
  static createHov = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
