import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvj")
export default class DvjController {
  @operation({
    summary: "Get Dvj",
  })
  @get()
  static getDvj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dvj",
  })
  @post("{id}")
  static createDvj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
