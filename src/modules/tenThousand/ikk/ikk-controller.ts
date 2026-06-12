import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikk")
export default class IkkController {
  @operation({
    summary: "Get Ikk",
  })
  @get()
  static getIkk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ikk",
  })
  @post("{id}")
  static createIkk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
