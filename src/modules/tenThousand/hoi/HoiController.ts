import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hoi")
export default class HoiController {
  @operation({
    summary: "Get Hoi",
  })
  @get()
  static getHoi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hoi",
  })
  @post("{id}")
  static createHoi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
