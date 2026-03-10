import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hor")
export default class HorController {
  @operation({
    summary: "Get Hor",
  })
  @get()
  static getHor = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hor",
  })
  @post("{id}")
  static createHor = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
