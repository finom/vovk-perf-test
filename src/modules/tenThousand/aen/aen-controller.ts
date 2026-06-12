import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aen")
export default class AenController {
  @operation({
    summary: "Get Aen",
  })
  @get()
  static getAen = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aen",
  })
  @post("{id}")
  static createAen = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
