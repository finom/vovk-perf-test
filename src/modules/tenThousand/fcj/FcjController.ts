import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcj")
export default class FcjController {
  @operation({
    summary: "Get Fcj",
  })
  @get()
  static getFcj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fcj",
  })
  @post("{id}")
  static createFcj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
