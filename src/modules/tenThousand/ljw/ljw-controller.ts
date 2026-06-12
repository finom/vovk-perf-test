import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljw")
export default class LjwController {
  @operation({
    summary: "Get Ljw",
  })
  @get()
  static getLjw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ljw",
  })
  @post("{id}")
  static createLjw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
