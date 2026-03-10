import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkk")
export default class FkkController {
  @operation({
    summary: "Get Fkk",
  })
  @get()
  static getFkk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fkk",
  })
  @post("{id}")
  static createFkk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
