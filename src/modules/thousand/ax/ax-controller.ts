import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ax")
export default class AxController {
  @operation({
    summary: "Get Ax",
  })
  @get()
  static getAx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ax",
  })
  @post("{id}")
  static createAx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
