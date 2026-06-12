import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gy")
export default class GyController {
  @operation({
    summary: "Get Gy",
  })
  @get()
  static getGy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gy",
  })
  @post("{id}")
  static createGy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
